// Loop condition is incorrect.
// The loop stops before multiplying by n,
// resulting in an incorrect factorial value.
// Missing handling for negative numbers

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

        Console.WriteLine("Factorial = " + factorial);
    }
}
