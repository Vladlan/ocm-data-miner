export const getOneWeekAgo = () => {
    const now = new Date();
    const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    return oneWeekAgo.toISOString();
}
