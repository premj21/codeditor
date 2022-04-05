import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new Group Id');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Group Id & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
       
        <><div class="wrapper">
            <div class="typing-demo">
                Prem Jadhav (software developer) . . 
            </div>
        </div><div className="homePageWrapper">

                <div className="formWrapper">
                    <div className='prem'><img
                        className="homePageLogo"
                        src="/logo.png"
                        alt="logo.png" />
                        <h1>Code Well </h1>
                    </div>
                    <h4 className="mainLabel">Paste or Create Group ID</h4>
                    <div className="inputGroup">
                        <input
                            type="text"
                            className="inputBox"
                            placeholder="GROUP ID"
                            onChange={(e) => setRoomId(e.target.value)}
                            value={roomId}
                            onKeyUp={handleInputEnter} />
                        <input
                            type="text"
                            className="inputBox"
                            placeholder="USERNAME"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onKeyUp={handleInputEnter} />
                        <button className="btn joinBtn" onClick={joinRoom}>
                            Join
                        </button>
                        <span className="createInfo">
                            If you don't have an invite then create &nbsp;
                            <a
                                onClick={createNewRoom}
                                href=""
                                className="createNewBtn"
                            >
                                new group
                            </a>
                        </span>
                    </div>
                </div>
                <footer>
                    <h4>
                        Built by Prem Jadhav 🤴
                    </h4>
                </footer>
            </div></>
    );
};

export default Home;
