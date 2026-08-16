// Correct solution.
// Uses a separate function to determine the grade.

using System;

class Program
{
    static char GetGrade(double average)
    {
        if (average >= 90) return 'A';
        if (average >= 80) return 'B';
        if (average >= 70) return 'C';
        if (average >= 60) return 'D';
        return 'F';
    }

    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + GetGrade(average));
    }
}
