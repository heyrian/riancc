export function getRelatedPosts(allPosts, currentSlug, currentCats) {
    // random selection function
    const randomLot = (array, num) => {
        const result = [];
        const usedIndices = new Set();

        while (result.length < num && result.length < array.length) {
            let randomIndex = Math.floor(Math.random() * array.length);
            while (usedIndices.has(randomIndex)) {
                randomIndex = Math.floor(Math.random() * array.length);
            }
            usedIndices.add(randomIndex);
            result.push(array[randomIndex]);
        }

        return result;
    };

    const normalizeSlug = (slug) => {
        if (slug.startsWith('zh/')) {
            return slug.replace('zh/', 'blog/');
        } else if (slug.startsWith('en/')) {
            return slug.replace('en/', 'en/blog/');
        }
        return slug;
    };

    const relatedPosts = allPosts
        .filter(post => post.slug !== currentSlug && post.data.category.includes(currentCats[0]))
        .map(post => ({
            ...post,
            slug: normalizeSlug(post.slug)
        }));

    return randomLot(relatedPosts, 4);
    // return relatedPosts.slice(0, 4)
}
