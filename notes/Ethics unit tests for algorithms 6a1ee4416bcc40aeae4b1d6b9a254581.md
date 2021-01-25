# Ethics unit tests for algorithms

Created: Jun 22, 2020 11:59 AM
Edited: Dec 11, 2020 10:43 AM
Tags: Ethics, Product

### **Core ideas**

- Algorithms affect people's lives, but can
    - entrench discrimination, even if they don't ask about the discriminatory variable directly
    - be inscrutable, especially as they become ML-based
- Unit tests are an existing way to check that a program or algorithm results in the expected output, given some input
- Ethics-focused unit tests could provide a way to encode examples of potential discrimination and ensure that an algorithm does not implement or reinforce them

### **Example problematic algorithm**

This recidivism algorithm fits the criteria above: it affects people, and provides discriminatory results on a variable (race) it doesn't ask about directly:

> In forecasting who would re-offend, the algorithm made mistakes with black and white defendants at roughly the same rate but in very different ways. The formula was particularly likely to falsely flag black defendants as future criminals, wrongly labeling them this way at almost twice the rate as white defendants. White defendants were mislabeled as low risk more often than black defendants.

> Could this disparity be explained by defendants’ prior crimes or the type of crimes they were arrested for? No. We ran a statistical test that isolated the effect of race from criminal history and recidivism, as well as from defendants’ age and gender. Black defendants were still 77 percent more likely to be pegged as at higher risk of committing a future violent crime and 45 percent more likely to be predicted to commit a future crime of any kind.

> Northpointe’s core product is a set of scores derived from 137 questions that are either answered by defendants or pulled from criminal records. Race is not one of the questions. The survey asks defendants such things as: “Was one of your parents ever sent to jail or prison?” “How many of your friends/acquaintances are taking drugs illegally?” and “How often did you get in fights while at school?”

Source: ProPublica, [Machine Bias](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing) - Risk Assessments in Criminal Sentencing

### **Simple unit test example for an algorithm**

```
#Algorithm
add(a, b): return a + b

#Unit tests:
assert(add(1, 2) == 3)
assert(add(1, 0) == 1)
assert(add(1, -2) == -1)
```

### **Unit test for ethics**

First, define sample data that reflects a case where you want to enforce that the algorithm does not go off track. Typically this might mean something like a person who reflects the general population in most ways, but has some protected features (e.g. race) that would conceivably cause an algorithm to be inappropriately biased.

Then, incorporate that into a unit test.

```
sample_david = {
    race: “African-American”,
    suburb: “Compton”
    age: 29,
    num_convictions: 0
}
sample_john = {
    race: “Caucasian”,
    suburb: “Maryville”,
    age: 29,
    num_convictions: 3
}

# Algorithm
predict_recidivism(person){
    if(logic...) return true
    else return false
}

# Unit tests
assert(predict_recidivism(sample_david) == false))
assert(predict_recidivism(sample_john) == true))
```

### **Direct vs indirect sample data**

The way the algorithm uses the sample data may be direct and indirect.

For direct, the algorithm is actually using the protected features, and the unit test is just a sanity check that that they are not being used inappropriately - but that could probably have been determined by inspecting the code anyway, so this is a pretty trivial case. One possible application of this model would be a standardised set of sample data that could be applied by different companies and developers to their work.

For indirect, the algorithm is never using the protected features, which means it is important that the sample person is representative across other features that would be relevant and are used by the algorithm.