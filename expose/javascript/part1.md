1. 20
2. 20
3. 20
4. This line would return an error because result is declared by let, which means it can only be accessed within the if block that it is contained in. This means that lines inside the if block can access result, but lines outside such as line 13 cannot.
5. This line would return an error. Technically, it returns an error at line 7 because you cannot reassign variables to a const. Therefore, attemping to do so will cause an error to be thrown.
6. This line would cause an error because const has the same scope of let, which means result cannot be accessed outside of the if block. Since line 13 is outside of the if block, the result variable would not be defined and line 13 would return an error. 


