const STORAGE_KEYS = {
  LEARNING_PROGRESS: 'learning_progress',
  QUIZ_SCORES: 'quiz_scores',
  ACHIEVEMENTS: 'achievements',
}

export interface Progress {
  courseId: string;
  moduleId: string;
  lessonId: string;
  completed: boolean;
  timestamp: number;
}

export interface QuizScore {
  courseId: string;
  moduleId: string;
  quizId: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt: number | null;
}

const defaultAchievements: Achievement[] = [
  {
    id: 'first_lesson',
    name: '学习起步',
    description: '完成第一个课程',
    icon: '🎯',
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'first_quiz',
    name: '测验达人',
    description: '完成第一个测验',
    icon: '📝',
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'perfect_quiz',
    name: '满分学霸',
    description: '在一个测验中获得满分',
    icon: '🏆',
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'python_master',
    name: 'Python大师',
    description: '完成Python数据分析课程',
    icon: '🐍',
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'sql_expert',
    name: 'SQL专家',
    description: '完成SQL课程',
    icon: '🗄️',
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: 'all_courses',
    name: '全面发展',
    description: '完成所有课程',
    icon: '🎓',
    unlocked: false,
    unlockedAt: null,
  },
];

export function getLearningProgress(): Progress[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveLearningProgress(progress: Progress): void {
  try {
    const progressList = getLearningProgress();
    const existingIndex = progressList.findIndex(
      (p) =>
        p.courseId === progress.courseId &&
        p.moduleId === progress.moduleId &&
        p.lessonId === progress.lessonId
    );
    
    if (existingIndex >= 0) {
      progressList[existingIndex] = progress;
    } else {
      progressList.push(progress);
    }
    
    localStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(progressList));
  } catch (error) {
    console.error('Failed to save learning progress:', error);
  }
}

export function getQuizScores(): QuizScore[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveQuizScore(score: QuizScore): void {
  try {
    const scores = getQuizScores();
    const existingIndex = scores.findIndex(
      (s) =>
        s.courseId === score.courseId &&
        s.moduleId === score.moduleId &&
        s.quizId === score.quizId
    );
    
    if (existingIndex >= 0) {
      scores[existingIndex] = score;
    } else {
      scores.push(score);
    }
    
    localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(scores));
  } catch (error) {
    console.error('Failed to save quiz score:', error);
  }
}

export function getAchievements(): Achievement[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return data ? JSON.parse(data) : defaultAchievements;
  } catch {
    return defaultAchievements;
  }
}

export function unlockAchievement(achievementId: string): boolean {
  try {
    const achievements = getAchievements();
    const achievement = achievements.find((a) => a.id === achievementId);
    
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true;
      achievement.unlockedAt = Date.now();
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to unlock achievement:', error);
    return false;
  }
}

export function getCourseProgress(courseId: string): number {
  const progress = getLearningProgress();
  const courseProgress = progress.filter((p) => p.courseId === courseId && p.completed);
  return courseProgress.length;
}

export function getTotalCompletedLessons(): number {
  const progress = getLearningProgress();
  return progress.filter((p) => p.completed).length;
}

export function getTotalQuizzesTaken(): number {
  return getQuizScores().length;
}
