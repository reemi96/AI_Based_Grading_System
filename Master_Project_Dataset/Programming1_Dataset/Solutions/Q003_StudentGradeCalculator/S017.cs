// Error: Prints the wrong grade even when average is calculated correctly.

using System;

class Program
{
    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = A");
    }
}