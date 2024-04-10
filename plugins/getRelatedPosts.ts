export function getRelatedPosts(allPosts, currentSlug, currentCats) {
    // random selection function
    const randomLot = (array, num) => {
        let newArray = [];

        while (newArray.length < num && array.length > 0) {
            const randomIndex = Math.floor(Math.random() * array.length);
            newArray.push(array[randomIndex]);
            array.splice(randomIndex, 1);
        }

        return newArray;
    };
    const relatedPosts = allPosts.filter(
        post =>
          post.slug !== currentSlug &&
          post.data.category.includes(currentCats[0])
      )
    
      return randomLot(relatedPosts, 4) // random selection
      // return relatedPosts.slice(0, 4)
}
