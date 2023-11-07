// topics = ["数组"]

#define MAX(i, j) (((i) > (j)) ? (i) : (j))

/**
 * 模拟 time O(n), space O(1), n = energySize = experienceSize
 */
int minNumberOfHours(int initialEnergy, int initialExperience, int *energy, int energySize, int *experience, int experienceSize)
{
    int targetEnergy = 1;
    for (int i = 0; i < energySize; i++)
    {
        targetEnergy += energy[i];
    }

    int targetExperience = 0, total = 0;
    for (int i = 0; i < experienceSize; i++)
    {
        if (targetExperience + total <= experience[i])
        {
            targetExperience += experience[i] - (targetExperience + total) + 1;
        }
        total += experience[i];
    }

    return MAX(targetEnergy - initialEnergy, 0) + MAX(targetExperience - initialExperience, 0);
}