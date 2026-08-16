// Missing validation for negative numbers.
// The program calculates factorial correctly for positive numbers
// but does not reject negative input as required.

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

        Console.WriteLine("Factorial = " + factorial);
    }
}
