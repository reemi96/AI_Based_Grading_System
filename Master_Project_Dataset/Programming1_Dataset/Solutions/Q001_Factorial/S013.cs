// Incorrect factorial formula.
// The loop stops at n-1, resulting in a wrong answer.
// missing handling for negative numbers
using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        long factorial = 1;

        for (int i = 1; i < n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine(factorial);
    }
}
