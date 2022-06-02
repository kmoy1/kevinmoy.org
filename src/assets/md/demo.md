# Model Bias and Variance, a Tangible Approach

Two fundamental concepts in machine learning are that of **bias** and **variance**. While these concepts are widely-known, it's uncommon we are given anything more than an abstract formulaic representation of what bias and variance are, leading to much confusion. I will attempt to remedy this issue with this article.

## Basics

First, though, we must cover basics and set the stage. When we try to create predictive models, we are almost always trying to imitate some *unknown* relationship between *observations* $x'$ and *parameters* (values we want to predict given the observations) $y$ by a "perfect equation" $y = f(x)$ as closely as possible. To take a simple example, let's say I want to predict the weight of an elephant $(y)$ given its height $(x)$. In a perfect world, we'd know what this equation is exactly. But it's not a perfect world.

Note that while the weight of an elephant is a constant (in the context of prediction, not in real life), the observations of height are certainly not. For example, let's say an elephant weighs $y = 10,000$ lb. Obviously, given this information the elephant's exact height isn't one-to-one. Instead, our heights follows a *distribution* $P(x | y)$- given an elephant weighs 10K pounds, it is much more likely to be around 8-10 ft tall as opposed to 2 feet tall. Unfortunately, this distribution is unknown.

So instead we we train an model $\hat{f}$. The best model will, given observed data $x$, produce an *estimate* $\hat{f}(x)$ that is as close to the true value $y = f(x)$ as possible. Remember that this true value $y$ is unknown, as is the relationship $f$.