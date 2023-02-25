
import {
    scrapeGenre,
    scrapeTopAiringAnime,
    scrapeAnimeMovies,
    scrapePopularAnime,
    scrapeNewSeason,
    scrapeRecentRelease,
    scrapeSearch,
    scrapeAnimeDetails,
    scrapeSeason,
    scrapeMP4,
    scrapeStreamSB,
    scrapeFembed,
    scrapeThread,
    DownloadReferer,
} from '../../../utils/anime_parser.js';

export default async function handler(req, res) {
    try {
        console.log(":: request :: ", req.query)
        const { id } = req.query

        const data = await scrapeMP4({ id: id });

        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            status: 500,
            error: 'Internal Error',
            message: err,
        });
    }
  }