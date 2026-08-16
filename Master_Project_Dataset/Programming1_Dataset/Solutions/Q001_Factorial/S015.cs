// Prints factorial correctly but output format
// does not match the required specification.
// missing handling for negative numbers

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        long factorial = 1;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine("The answer is:");
        Console.WriteLine("****");
        Console.WriteLine(factorial);
        Console.WriteLine("****");
    }
}
