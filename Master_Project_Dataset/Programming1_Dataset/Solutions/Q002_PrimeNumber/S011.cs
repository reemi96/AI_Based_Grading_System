// Error: Incorrect loop boundary.
// The loop does not check divisibility by n-1.
// missing handling with numbers less than 2
using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        bool prime = true;

        for (int i = 2; i < n - 1; i++)
        {
            if (n % i == 0)
            {
                prime = false;
                break;
            }
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
