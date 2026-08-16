// Error: Missing divisibility check.
// The loop runs but never tests n % i.
// missing handling with numbers less than 2
using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        bool prime = true;

        for (int i = 2; i < n; i++)
        {
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
