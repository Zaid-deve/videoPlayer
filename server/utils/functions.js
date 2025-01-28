const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

function getHeadersToSend() {
    return [
        'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
        'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language: en-US,en;q=0.9',
        'Referer: http:127.0.0.1',
    ];
}

async function getHeaders(url) {
    try {

        const req = await axios.head(url);
        const { status, headers } = req;
        if (status == 200) {
            return { success: true, headers };
        }
    } catch (error) { }
    return { success: false, message: 'Server of video is private or dosent allow exteral websites to retrive their videos.' }
}

function isHtml(mime) {
    return mime?.startsWith('text/html');
}

async function parseHtmlForVideo(url) {
    try {
        const { data: html } = await axios.get(url, {
            headers: getHeadersToSend()
        });

        const $ = cheerio.load(html);
        const videoSources = [];
        $('video source').each((_, el) => {
            const src = $(el).attr('src');
            if (src) {
                videoSources.push(src.startsWith('http') ? src : new URL(src, url).href);
            }
        });

        if (videoSources.length) return videoSources;

        // Check for video tag src attribute
        const videoTagSrc = $('video').attr('src');
        if (videoTagSrc) {
            return [videoTagSrc.startsWith('http') ? videoTagSrc : new URL(videoTagSrc, url).href];
        }

        // Check for meta og:video
        const metaVideo = $('meta[property="og:video"]').attr('content');
        if (metaVideo) {
            return [metaVideo.startsWith('http') ? metaVideo : new URL(metaVideo, url).href];
        }

        // Check for iframe sources (e.g., YouTube, Vimeo)
        const iframeSrc = $('iframe').attr('src');
        if (iframeSrc && (iframeSrc.includes('youtube') || iframeSrc.includes('vimeo'))) {
            return [iframeSrc];
        }

        return null; // No video sources found
    } catch (er) {
        console.error('Error in parseHtmlForVideo:', er);
        return null;
    }
}


function sendResp(res, data, status = 200) {
    res.status(status).json(data);
}

function isVideoOrHtml(headers) {
    const mime = headers['content-type'];
    if (!mime) return false;
    return isVideo(mime) || isHtml(mime);
}

function isVideo(mime) {
    return mime?.startsWith('video');
}

module.exports = {
    isHtml,
    parseHtmlForVideo,
    sendResp,
    isVideoOrHtml,
    isVideo,
    getHeaders
};
