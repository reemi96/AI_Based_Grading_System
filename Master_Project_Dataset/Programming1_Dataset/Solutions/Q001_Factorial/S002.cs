// Incorrect initialization of factorial.
// factorial starts with 0 instead of 1, causing the result
// to always be 0 regardless of the input value.
// Missing handling for negative numbers & n=0

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        long factorial = 0;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine("Factorial = " + factorial);
    }
}
