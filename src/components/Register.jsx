import { useState } from 'react';
const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(email, name, pass, confirmPass);for test
    };
    return (
        <>
            <div className="w-1/4">
                <h2 className="pb-6 text-center text-2xl font-bold">Creat a new account</h2>
                <form onSubmit={submitHandler}>
                    <div className="pb-4">
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl py-3 px-4"
                            type="text"
                            placeholder="youremail@gmail.com"
                        />
                    </div>
                    <div className="pb-4">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl py-3 px-4"
                            type="text"
                            placeholder="enter your name"
                        />
                    </div>
                    <div className="pb-4">
                        <label htmlFor="password">Password</label>
                        <input
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className="w-full rounded-xl py-3 px-4"
                            type="text"
                            placeholder="enter your password"
                        />
                    </div>
                    <div className="pb-4">
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input
                            value={confirmPass}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            className="w-full rounded-xl py-3 px-4"
                            type="text"
                            placeholder="enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-center pb-6">
                        <button
                            type="submit"
                            className="rounded-xl  bg-slate-700 py-3 px-12 text-white"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center">
                    <button type="button" className=" font-bold text-yellow-900">
                        Log in
                    </button>
                </div>
            </div>
        </>
    );
};
export default Register;
