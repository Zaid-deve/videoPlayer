const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const url = require('url-parser');
const { getHeaders, sendResp, isVideo, isHtml, parseHtmlForVideo } = require('./utils/functions');

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/getVideo', async (req, res) => {
    const params = url.parse(req.url);
    const videoUrl = params.query?.split('=').pop();

    if (!videoUrl) {
        return sendResp(res, { success: false, message: 'No URL provided!' }, 400);
    }

    try {
        const headers = await getHeaders(videoUrl);

        if (headers && headers.success) {
            const ctype = headers.headers['content-type'];

            if (isVideo(ctype)) {
                return sendResp(res, { success: true, videoUrl });
            } else if (isHtml(ctype)) {
                const videoSrc = await parseHtmlForVideo(videoUrl);

                if (Array.isArray(videoSrc)) {
                    return sendResp(res, { success: true, length: videoSrc.length, videoSrc });
                }

                if (videoSrc) {
                    return sendResp(res, { success: true, length: 1, videoUrl: videoSrc });
                }
            }
        }

        return sendResp(res, { success: false, message: headers?.message || 'Video not found or the the link is not an valid video format!' });
    } catch (error) {
        console.log(error)
        return sendResp(res, { success: false, message: 'Server error occurred.' }, 500);
    }
});

app.listen(process.env.APP_PORT || 3000, () => {
    console.log('App running on port', process.env.APP_PORT || 3000);
});
