class Movie:

    def __init__(self, id, title=None, duration=None, relased=None):
        self.id = id
        self.title = title
        self.duration = duration
        self.relased = relased

    def to_JSON(self):
        return {
            'id': self.id,
            'title': self.title,
            'duration': self.duration,
            'relased': self.relased
        }