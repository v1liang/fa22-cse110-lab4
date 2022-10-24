1. 3
2. 150
3. 150
4. [50, 100, 150]. The goal of the function is given an input of an array of prices such as [100, 200, 300], apply a discount (50%) on those numbers. We are returning discounted, which is declared as an empty array by var. Since discounted is a var, it can be accessed anywhere within the function. So when we return discounted, we return the values outputted from the for loop representing the 50% off of the array from the input. 
5. This would cause an error because i is declared with let, which means it is cannot be accessed outside of its block scope. Since line 12 calls i outside of the for block scope, it cannot be accessed and will throw an error.
6. This will cause an error because idscounted price is declared within the for loop with let declaration, meeting it cannot be accessed outside of the for block. Therefore, it would throw an error as line 13 tries to access it as it is outside of the for block.
7. 150
8. It will return [50, 100, 150] because let declares discounted within the function but not in a block scope. The let variable allows for reassignment so pushing into the discounted array will add in the input array * half. 
9. It will return an error because i is defined with a let variable inside the for loop block, which means it cannot be accessed by line 11 as it is outside of the block.
10. 3
11. [50, 100, 150]
12. A) student.name
    B) student["Grad Year"]
    C) student.greeting()
    D) student["Favorite Teacher"].name
    E) student.courseLoad[0]
13. A) '32', string + number returns a string by concatenating
    B) 1, strings - numbers returns number w/ arithemtic.
    C) 3, when working with numbers, null is converted to 0 so 3 + 0 is 3
    D) 3null, strings with the + will concatenate null as another string.
    E) 4, true is mapped to 1 when + with numbers so 1 + 3 is 4
    F) 0, false is converted to 0 and so is null, so the two 0s are added together 
    G) '3undefined', with string addition, usually string takes precedence so undefined becomes a string literal and 3 is concatenated w/ undefined
    H) NaN, undefined values usually become NaN and any string error gives NaN, so adding these two data types during conversions resulting in NaN makes sense.
14. A) true, string 2 becomes a number and is compared to 1
    B) false, string comparison compares letter by letter, so the first letters compared are 2 < 1, which is not true
    C) true, string 2 becomes number 2, is equal to 2
    D) false, === is a strict equality which means that type conversion
    E) false, true is converted to 1 and does not have numerical equality to 2
    F) true, Boolean(2) converts the number 2 into the boolean true since 2 is not an "intuitively empty" value. Since Boolean(2) is boolean true compared to boolean true, the strict equality holds.
15. == usually checks for value equality regardless of different data types by converting different data types to numerical values. === is a strict equality operator which will check for equality between two elements but elements of differing data types being compared are automatically false.

17. [2,4,6]. modifyArray takes in two inputs, the input array and a callback function. modifyArray loops through the input array and applies the callback function to each value in the array, which in our case, doSomething multiples the values by 2. Therefore, the output array is each value * 2. 

19. 1 4 3 2