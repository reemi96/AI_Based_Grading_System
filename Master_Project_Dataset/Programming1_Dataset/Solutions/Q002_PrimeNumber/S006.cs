// Error: Loop starts from 1.
// Every number becomes Not Prime because n % 1 is always 0.
// missing handling with numbers less than 2

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        bool prime = true;

        for (int i = 1; i < n; i++)
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
