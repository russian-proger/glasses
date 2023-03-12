import React from 'react';
import {Button, Container, Row, Col} from "react-bootstrap";
import glassFilter from '../filter/glass';

const Demo = () => {
    /** @type {React.MutableRefObject<HTMLCanvasElement>} */
    const canvasRef = React.useRef();
    
    /** @type {React.MutableRefObject<HTMLVideoElement>} */
    const videoRef = React.useRef();
    

    React.useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const video  = videoRef.current;
        // const video = document.createElement("video");


        function render() {
            requestAnimationFrame(render);

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            if (canvas.width == 0) return;

            const ctx    = canvas.getContext('2d');
            ctx.drawImage(video,0,0,canvas.width,canvas.height);

            glassFilter(canvas);
        }

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }).then((stream) => { 

            // const canvas = document.createElement("canvas");
    
    
            video.srcObject = stream;

            requestAnimationFrame(render);
        })
    }, []);

    function handle() {
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