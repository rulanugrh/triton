import bcrypt from 'bcrypt'

export function HashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 14)
}

export function ComparePassword(password: string, compare: string): Promise<boolean> {
    return bcrypt.compare(password, compare)
}