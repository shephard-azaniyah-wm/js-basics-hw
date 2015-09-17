// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( 15 );
//The outcome will be stated as a number. The reason behind this is because typeof describes what is in parenthesis.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( "hello" );
//The outcome would be a statement, because the quotation marks state it is a word.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( [ "dog", "cat", "horse" ] );
// This outcome will b object because of the words are put in a bracket.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
typeof( NaN );
// This outcome will be undefined, because NAN stands for not a number.


// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburger" + "s";
// The outcome will be adding the s to the end of the the word. The quotation marks give this reasoning to add them together.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"hamburgers" - "s";
// The outcome for this one will subtract the s again, because of the quotation marks give us that action.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
"johnny" + 5;
//The outcome will be adding the 5 onto johny since it is not another digit that will be added.

// What is the return value of the below code sample? Provide a sentence or two of explanation.
99 * "luftbaloons";
//A word can not be multiplied by a number making it NaN (Not a number).

// What will the contents of the below array be after the below code sample is executed.
var numbers = [ 2, 4, 6, 8 ];
numbers.pop();
numbers.push( 10 );
numbers.unshift( 3 );


// What is the return value of the below code sample?
var morse = [ "dot", "pause", "dot" ];
var moreMorse = morse.join( " dash " );
moreMorse.split( " " );

// What will the contents of the below array be after the below code sample is executed.
var bands = [];
var beatles = [ "Paul", "John", "George", "Pete" ];
var stones = [ "Brian", "Mick", "Keith", "Ronnie", "Charlie" ];
bands.push( beatles );
bands.unshift( stones );
bands[ bands.length - 1 ].pop();
bands[0].shift();
bands[1][3] = "Ringo";
