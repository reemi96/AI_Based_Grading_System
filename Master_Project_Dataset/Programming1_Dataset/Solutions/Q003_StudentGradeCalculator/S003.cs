// Correct solution.
// Stores grades in an array and calculates average.

using System;

class Program
{
    static void Main()
    {
        double[] grades = new double[3];

        for (int i = 0; i < 3; i++)
        {
            grades[i] = double.Parse(Console.ReadLine());
        }

        double average = (grades[0] + grades[1] + grades[2]) / 3;

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
