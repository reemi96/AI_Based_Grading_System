// Factorial calculation starts from 2.
// Produces wrong result for n = 1.
// Missing handling for negative numbers

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        long factorial = 2;

        for (int i = 2; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine(factorial);
    }
}
