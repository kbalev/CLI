const fs = require(`fs`);
let movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    movieList = JSON.parse(tempJson);
} catch (error) {
    movieList = [];
}

const add = () => {
    if (process.argv[2] === 'add') {
        tempMovie = {movie: process.argv[3],
        status: 'unfinished'}
        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList)
        console.log(`You have added ${process.argv[3]} to your watchlist. Its default status is set to "Unfinished"`)
        fs.writeFileSync('./netflix.json', stringMovieList);
    }
}

const remove = () => {
    if (process.argv[2] === "remove") {
        target = process.argv[3]
        for (let i = 0; i<movieList.length; i++) {
            if(target == movieList[i].movie){
                movieList.splice([i], 1)
                let stringMovieList = JSON.stringify(movieList)
                fs.writeFileSync('./netflix.json', stringMovieList);
                console.log(`You have removed ${target}`)
            }
        }
    }
}

const update = () => {
    if (process.argv[2] === "update") {
        target = process.argv[3]
        newStatus = process.argv[4]
        for (let i = 0; i<movieList.length; i++) {
            if(target == movieList[i].movie){
                movieList[i].status = newStatus;
                let stringMovieList = JSON.stringify(movieList);
                fs.writeFileSync('./netflix.json', stringMovieList);
                console.log(`You have set the status of ${target} to "${newStatus}".`)
            }
        }
    }
}

const read = () => {
    if (process.argv[2] === "list"){
        console.log(movieList);
    }
}

add();
remove();
update();
read();


// build three more functions: read, update and delete functions