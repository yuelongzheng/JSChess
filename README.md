# JSChess

Learning Javascipt, HTML, and how to create a chess engine

# Testing

Using [Jest](https://jestjs.io/). To install jest use the following in the JSChess folder
    ```
npm install --save-dev jest
    ```

Required to install [Babel](https://babeljs.io/)
    ```
npm install --save-dev babel-jest @babel/core @babel/preset-env
    ```

To run the test use the following
    ```
npm test
    ```

To generate coverage use the following
    ```
npm test -- --coverage
    ```
To view the coverage report open index.html in ./coverage/lcov-report

To test specific files use the following
    ```
    npx jest file-name.test.js
    ```

# Development

To compile changes in code run the following
    ```
npm run build
    ```
This runs webpack

webdev-server can also be used
    ```
npm run dev
    ```

# Searching

Uses min-max and alpha-beta pruning for searching moves.
Quiescent search, MVV/LVA, and principal variation search are implemented to improve searching techniques.

# Playing with engine
The engine can be played by cloning the repository and then opening index.html in the public folder

# Future Improvements

- Implement a flip board feature
- Improve GUI appearance
- Display FEN string below the gameboard
- Use React to improve the GUI
- Display search statisitcs on page
- Improve searching algorithm
- Implement a opening book for the engine
- Make it playable online

# Acknowledgements

Using the following [playlist](https://www.youtube.com/watch?v=2eA0bD3wV3Q&list=PLZ1QII7yudbe4gz2gh9BCI6VDA-xafLog&index=1) as a guide
