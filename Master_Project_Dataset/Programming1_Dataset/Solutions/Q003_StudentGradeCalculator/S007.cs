// Error: Uses integer division.
// Decimal averages are truncated.

using System;

class Program
{
    static void Main()
    {
        int g1 = int.Parse(Console.ReadLine());
        int g2 = int.Parse(Console.ReadLine());
        int g3 = int.Parse(Console.ReadLine());

        int average = (g1 + g2 + g3) / 3;

        char grade;

        if (average >= 90)
            grade = 'A';
        else if (average >= 80)
            grade = 'B';
        else if (average >= 70)
            grade = 'C';
        else if (average >= 60)
            grade = 'D';
        else
            grade = 'F';

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + grade);
    }
}
