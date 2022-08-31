import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newTex = text.toUpperCase();
        setText(newTex);
    }

    const handleLoClick = () => {
        let newTex = text.toLowerCase();
        setText(newTex);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
    }

    const handleExtraSpacesClick = () => {
        let newTex = text.split(/[  ]+/);
        setText(newTex.join(" "));
    }

    const handleClearClick = () => {
        let newTex = '';
        setText(newTex);
    }

    return (
        <>
            <Container className="mt-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <Form.Group className="mb-3">
                    <h3>Enter the text to analyze below</h3>
                    <Form.Control style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} as="textarea" id='textarea' rows={8} onChange={(event) => { setText(event.target.value) }} value={text} />
                </Form.Group>
                <Button variant="primary" className="mx-2" onClick={handleUpClick} type="submit">
                    Convert to UpperText
                </Button>
                <Button variant="primary" className='mx-2' onClick={handleLoClick} type="submit">
                    Convert to LowerText
                </Button>
                <Button variant="primary" className='mx-2' onClick={handleCopyClick} type="submit">
                    Copy Text
                </Button>
                <Button variant="primary" className='mx-2' onClick={handleExtraSpacesClick} type="submit">
                    Remove Extra Spaces
                </Button>
                <Button variant="primary" className='mx-2' onClick={handleClearClick} type="submit">
                    Clear Text
                </Button>
            </Container>
            <Container className='mt-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <h3 className='mt-3'>Preview</h3>
                <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
            </Container>
        </>
    )
}
