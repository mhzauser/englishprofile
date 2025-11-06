#!/usr/bin/env python
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'englishbackend.settings')
django.setup()

from api.models import BlogPost
from django.utils import timezone

# Sample blog posts
blog_posts = [
    {
        'title': '5 Essential Tips for Improving Your English Pronunciation',
        'content': '''Pronunciation is one of the most important aspects of learning English. Here are five essential tips to help you improve:

1. **Listen Carefully**: Pay attention to how native speakers pronounce words. Watch English movies, listen to podcasts, and practice shadowing.

2. **Practice Daily**: Consistency is key. Even 10 minutes of daily practice can make a significant difference over time.

3. **Record Yourself**: Use your phone to record yourself speaking and compare it with native speakers. This helps you identify areas for improvement.

4. **Focus on Stress and Intonation**: English is a stress-timed language. Learning where to place stress in words and sentences will make you sound more natural.

5. **Don't Be Afraid to Make Mistakes**: Making mistakes is part of the learning process. The more you practice, the more confident you'll become.

Remember, improving pronunciation takes time and patience. Keep practicing, and you'll see progress!''',
        'author': 'English Teacher'
    },
    {
        'title': 'How to Build Your English Vocabulary Effectively',
        'content': '''Building a strong vocabulary is crucial for English fluency. Here's a proven method to expand your word bank:

**The Context Method**: Instead of memorizing word lists, learn words in context. When you encounter a new word, read the entire sentence and understand how it's used.

**Use Flashcards with Sentences**: Create flashcards that include the word in a sentence, not just the definition. This helps you remember how to use the word correctly.

**Read Widely**: Read books, articles, and blogs on topics that interest you. You'll naturally encounter new vocabulary in meaningful contexts.

**Practice Active Recall**: Don't just review words passively. Try to use new words in your own sentences and conversations.

**Group Related Words**: Learn words in groups (synonyms, antonyms, word families) to create stronger mental connections.

**Review Regularly**: Use spaced repetition to review words at increasing intervals. This helps move words from short-term to long-term memory.

Start with 5-10 new words per day and gradually increase as you become more comfortable. Quality over quantity!''',
        'author': 'English Teacher'
    },
    {
        'title': 'Mastering English Grammar: Common Mistakes to Avoid',
        'content': '''Many English learners struggle with grammar. Here are the most common mistakes and how to avoid them:

**1. Subject-Verb Agreement**: Make sure your verb matches your subject. "He goes" not "He go". This is especially important with third-person singular.

**2. Articles (a, an, the)**: Many languages don't have articles, making this challenging. Remember: use "a/an" for general, "the" for specific.

**3. Prepositions**: Prepositions are tricky because they don't always translate directly. "Arrive at" a place, "arrive in" a city, "arrive on" a day.

**4. Present Perfect vs. Past Simple**: Use present perfect for actions that started in the past and continue to the present. Use past simple for completed actions in the past.

**5. Countable vs. Uncountable Nouns**: "Much" with uncountable (much water), "many" with countable (many books).

**6. Word Order**: English follows a specific word order: Subject-Verb-Object. Changing this can make sentences confusing.

The best way to master grammar is through practice. Write sentences, get feedback, and learn from your mistakes. Don't let perfect grammar stop you from speaking - communication is more important than perfection!''',
        'author': 'English Teacher'
    },
    {
        'title': 'The Power of Daily English Practice',
        'content': '''Consistency beats intensity when it comes to learning English. Here's why daily practice matters and how to make it work:

**Why Daily Practice Works**:
- Maintains momentum and prevents forgetting
- Builds habits that become automatic
- Creates steady, sustainable progress
- Reduces the need for long study sessions

**How to Practice Daily**:
1. **Morning Routine**: Start your day with 10 minutes of English - read a news article, listen to a podcast, or review vocabulary.

2. **Language Exchange**: Find a conversation partner and practice speaking daily, even if it's just 15 minutes.

3. **English Media**: Replace some of your native language content with English - watch shows, listen to music, read books.

4. **Journal Writing**: Write a few sentences in English every day about your experiences, thoughts, or plans.

5. **Mobile Apps**: Use language learning apps during commutes or breaks. Even 5 minutes counts!

**Tips for Success**:
- Set realistic goals (10-30 minutes is better than 2 hours once a week)
- Make it enjoyable - choose activities you actually like
- Track your progress to stay motivated
- Don't skip days - even 5 minutes is better than nothing

Remember: Small daily actions lead to big results. Start today, and in a few months, you'll be amazed at your progress!''',
        'author': 'English Teacher'
    },
    {
        'title': 'Building Confidence in English Speaking',
        'content': '''Many students understand English well but struggle with speaking confidence. Here's how to overcome this challenge:

**Understanding the Fear**:
Fear of making mistakes, being judged, or sounding foolish often prevents us from speaking. Remember: everyone makes mistakes, even native speakers!

**Strategies to Build Confidence**:

1. **Start Small**: Begin with simple conversations about familiar topics. Talk about your hobbies, daily routine, or favorite foods.

2. **Practice with Supportive People**: Find patient conversation partners who encourage you rather than criticize.

3. **Prepare Common Phrases**: Learn useful phrases for different situations. Having these ready reduces anxiety.

4. **Focus on Communication**: Remember that the goal is to communicate, not to be perfect. People understand you even with mistakes.

5. **Celebrate Small Wins**: Acknowledge every successful conversation, no matter how short or simple.

6. **Practice in Low-Pressure Situations**: Start with one-on-one conversations before moving to group settings.

7. **Record Yourself**: Practice speaking alone and record yourself. This helps you get comfortable with your voice in English.

**Mindset Shift**:
- View mistakes as learning opportunities, not failures
- Remember that most people appreciate your effort to speak their language
- Focus on progress, not perfection
- Be patient with yourself - confidence builds gradually

The more you speak, the more confident you'll become. Take the first step today!''',
        'author': 'English Teacher'
    }
]

# Add blog posts
print("Adding blog posts...")
for post_data in blog_posts:
    post, created = BlogPost.objects.get_or_create(
        title=post_data['title'],
        defaults={
            'content': post_data['content'],
            'author': post_data['author'],
            'created_at': timezone.now()
        }
    )
    if created:
        print(f"✓ Created: {post.title}")
    else:
        print(f"- Already exists: {post.title}")

print(f"\nTotal blog posts: {BlogPost.objects.count()}")

