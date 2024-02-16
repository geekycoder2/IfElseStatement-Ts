// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Make an array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits: string[] = ['apple', 'banana', 'orange'];

// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement.
if (favorite_fruits.includes('apple')) {
    console.log('I Like like apples!');
}

if (favorite_fruits.includes('banana')) {
    console.log('I Like bananas!');
}

if (favorite_fruits.includes('orange')) {
    console.log('I like oranges!');
}

if (favorite_fruits.includes('grape')) {
    console.log('I really like grapes!');
} else {
    console.log('Grapes are not in my favorite fruits list.');
}

if (favorite_fruits.includes('kiwi')) {
    console.log('I like kiwis!');
} else {
    console.log('Kiwis are not in my favorite fruits list.');
}