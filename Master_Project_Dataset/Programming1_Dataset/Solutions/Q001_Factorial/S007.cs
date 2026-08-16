// Does not validate negative numbers.
// Also uses int instead of long which may cause overflow
// for larger input values.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        int factorial = 1;

        for (int i = 1; i <= n; i++)
        {
            factorial *= i;
        }

        Console.WriteLine(factorial);
    }
}
