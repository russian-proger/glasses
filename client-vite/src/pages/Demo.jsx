import React from 'react';
import {Button, Container, Row, Col} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand"
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const Demo = () => {
    /** @type {React.MutableRefObject<HTMLCanvasElement>} */
    const canvasRef = React.useRef();
    
    /** @type {React.MutableRefObject<HTMLVideoElement>} */
    const videoRef = React.useRef();
    

    React.useLayoutEffect(() => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((stream) => {
            videoRef.current.srcObject = stream;
        })
    }, []);

    function handle() {
        const canvas = canvasRef.current;
        const ctx    = canvas.getContext('2d');

        const video  = videoRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <video onClick={handle} ref={videoRef} autoPlay={true}></video>
                </Col>
                <Col md={6}>
                    <canvas ref={canvasRef}></canvas>
                </Col>
            </Row>
        </Container>
    );
};

export default Demo;