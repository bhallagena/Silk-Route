import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./firebase";

export const getImagesUrl = async (pathName: string) => {
    const imagesRef = ref(storage, pathName);

    try {
        const result = await listAll(imagesRef);
        const urls = await Promise.all(result.items.map(item => getDownloadURL(item)));

        return urls;
    } catch (error) {
        console.error("Error fetching images", error);
        return null;
    }
};