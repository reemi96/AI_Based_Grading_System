// Error: Missing grade classification logic.
// Always assigns grade F.

using System;

class Program
{
    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        char grade = 'F';

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + grade);
    }
}