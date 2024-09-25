import { useState, useEffect } from "react"
import { Row, Col, Container, Button } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import Lottie from "lottie-react"
import animationData from "../assets/json/casino1.json"
import girlImg from "../assets/img/girl.png"

export const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const toType = "100%";
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let fullText = toType;
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(200);
        }
    }

    return (
        <section className="banner" id="home">
            <div id="confetti-wrapper">
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
                <div className="confetti"></div>
            </div>
            <Lottie animationData={animationData} />
            <Container>
                <Row className="align-items-center w-100">
                    <Col className="column-1 text-center" xs={12} md={6} xl={7}>
                        <h1 className="promo-text">
                            <div>100%</div>
                            <div>Welome Bonus</div>
                            <div className="sub-promo-text">x25 Rollover</div>
                        </h1>
                        <Button href="https://k9inr1.com/en/promotion" variant="warning" size="lg">Play Now and Win <ArrowRightCircle size={25} /></Button>
                    </Col>
                    <Col className="column-2" xs={12} md={6} xl={5}>
                        <img className="bounce" src={girlImg} alt="Girl" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}