import { useEffect, useState } from "react"
import { NewsItemI } from "@/entities/News";

const NEWS_API = './src/entities/News/model/lib/newsItems.json';

export const useNewsItems = (): NewsItemI[] | undefined => {
    const [news, setNews] = useState<NewsItemI[]>()
    
    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch(NEWS_API);
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNewsData()
    }, [])

    return news;
}