// Correct solution.
// Uses recursion to calculate factorial.

using System;

class Program
{
    static long Factorial(int n)
    {
        if (n == 0)
            return 1;

        return n * Factorial(n - 1);
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        if (n < 0)
        {
            Console.WriteLine("Negative numbers are not allowed.");
            return;
        }

        Console.WriteLine(Factorial(n));
    }
}