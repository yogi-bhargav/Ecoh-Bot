const ssml = (txt) => {
    return `<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts" xmlns:emo="http://www.w3.org/2009/10/emotionml" 
    version="1.0" xml:lang="en-us">
    <voice name="Microsoft Server Speech Text to Speech Voice (en-us, SwaraNeural)">
        <mstts:express-as style="cheerful">
            <prosody rate="+32.00%" volume="-10.00%">
            <break time="200ms"/>
            ${txt}
            </prosody>
        </mstts:express-as>
    </voice>
</speak>`
}


module.exports = {
    ssml
}