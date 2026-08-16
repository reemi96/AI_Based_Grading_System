// Correct solution.
// Uses nested conditional operator.

using System;

class Program
{
    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        char grade =
            average >= 90 ? 'A' :
            average >= 80 ? 'B' :
            average >= 70 ? 'C' :
            average >= 60 ? 'D' : 'F';

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + grade);
    }
}
