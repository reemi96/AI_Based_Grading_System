// Correct solution.
// Uses a switch expression for grade classification.

using System;

class Program
{
    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        char grade = average switch
        {
            >= 90 => 'A',
            >= 80 => 'B',
            >= 70 => 'C',
            >= 60 => 'D',
            _ => 'F'
        };

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + grade);
    }
}
