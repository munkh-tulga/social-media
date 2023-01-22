import styled from 'styled-components';

const RightBar = () => {
    return <RightBarStyle>
        <div className='container'>
            <div className='item'>
                <div className='title'>Suggestions For You</div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <span>Jane Doe</span>
                    </div>
                    <div className='buttons'>
                        <button className='follow'>follow</button>
                        <button className='red'>dismiss</button>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <span>Jane Doe</span>
                    </div>
                    <div className='buttons'>
                        <button className='follow'>follow</button>
                        <button className='red'>dismiss</button>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='title'>Latest Activities</div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <p>
                            <span>Jane Doe</span> changed their cover picture
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='title'>Online freinds</div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <div className='online' />
                        <span>Jane Doe</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <div className='online' />
                        <span>Jane Doe</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <div className='online' />
                        <span>Jane Doe</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <div className='online' />
                        <span>Jane Doe</span>
                    </div>
                </div>
                <div className='user'>
                    <div className='userInfo'>
                        <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=acompress&cs=tinysrgb&w=1600' alt=' ' />
                        <div className='online' />
                        <span>Jane Doe</span>
                    </div>
                </div>
            </div>
        </div>
    </RightBarStyle>
};
export default RightBar

const RightBarStyle = styled.div`
flex: 3;
position: sticky;
top: 70px;
height: calc(100vh - 70px);
overflow: scroll;
&::-webkit-scrollbar {
    display:none;
}
.container {
    padding: 20px;
    .item {
        box-shadow: 0px 0px 15px 1px rgb(0,0,0,0.09);
        padding: 20px;
        margin-bottom: 20px;
        .title {
            color: gray;
            text-align: left;
        }
        .user {
            display: flex;
            align-items:center;
            justify-content: space-between;
            margin: 20px 0px;

            .userInfo {
                display: flex;
                align-items:center;
                gap: 20px;
                position: relative;

                img {
                    width:40px;
                    height:40px;
                    border-radius: 50%;
                    object-fit:cover;
                }

                .online {
                    width: 12px;
                    height:12px;
                    border-radius: 50%;
                    background-color: limegreen;
                    top: 0;
                    left: 30px;
                    position: absolute;
                }

                p {
                    color: gray;
                }

                span {
                    font-weight: 500;
                    color:black;
                }
            }
            .buttons {
                display: flex;
                align-items:center;
                gap: 10px;
                .follow {
                    background-color: #5271ff;
                }
                .red {
                    background-color: #f0544f;
                }
                button {
                    border: none;
                    padding: 5px;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
}
`