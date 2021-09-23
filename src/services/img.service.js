import { storage } from "../libs/firebase.libs";

export const getImages = async function () {
  let urls = [];
 
  const allPic = await storage.ref(`/imgs/doors`).listAll();
  allPic.items.forEach((itemRef) => {
     itemRef.getDownloadURL().then((url) => {
      urls.push(url);
    });
  });

  return urls;
};
