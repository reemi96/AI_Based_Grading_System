// Correct solution.
// Uses a while loop instead of a for loop.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            Console.WriteLine("Negative numbers are not allowed.");
            return;
        }

        long factorial = 1;

        while (n > 1)
        {
            factorial *= n;
            n--;
        }

        Console.WriteLine(factorial);
    }
}