import React from "react";
const users = [
    {
        username: 'Admin',
        password: '456'
    },
    {
        username: 'User1',
        password: '123'
    },
    {
        username: 'User2',
        password: '789'
    }
];

class GuestClass extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.state = { username: "", password: "" };
    }

    handleChangeUsername(e) {
        //setUsername(e.target.value)
        this.setState({ username: e.target.value })
    }
    handleChangePassword(e) {
        //setPassword(e.target.value);
        this.setState({ password: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            username,
            password
        }
        console.log(user);
        users.forEach(item => {
            //console.log(item);
            if (item.username === user.username && item.password === user.password) {
                console.log(true);
                //console.log(props);
                //props.val = !props.val
                //setPropsval(!props.val);
                //console.log(propsval);

            } else console.log(false);
        })

    }
    render() {
        return (
            <>
                <h1>LogIn</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" name="username" onChange={this.handleChangeUsername} required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={this.handleChangePassword} required />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default GuestClass;