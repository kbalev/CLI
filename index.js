const fs = require(`fs`);
let movieList;

try {
    let tempJson = fs.readFileSync('./netflix.json');
    let tempNetflix = JSON.parse(tempJson);
    movieList.push(tempNetflix)
} catch (error) {
    movieList = [];
}

const add = () => {
    if (process.argv[2] === 'add') {
        tempMovie = {movie: process.argv[3]}
        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList)
        console.log(movieList)
        fs.writeFileSync('./netflix.json', stringMovieList);

    }
}

add();